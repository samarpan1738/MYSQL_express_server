$(
    ()=>{
        let inp_name=$('#name')
        let inp_age=$('#age')
        let inp_city=$('#city')
        let submit_btn=$('#submit')
        let table_persons=$('#persons')
        console.log(inp_name);
        get_persons(refresh_persons_table);
        function refresh_persons_table(persons)
        {
            //persons is an array of person objects sent by API
            table_persons.empty();
            table_persons.append(
                `
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                `);
                //console.log(persons);
                //iterate through all persons in the array
                for(person of persons)
                {
                    table_persons.append(
                        `
                        <tr>
                            <td>${person.name}</td>
                            <td>${person.age}</td>
                            <td>${person.city}</td>
                            </tr>
                        `);
                }
            
        }

        function get_persons(done){
            $.getJSON('/api/persons/',(data)=>{
            done(data);
            })
        }

        function add_person(done)
        {
            return new Promise((resolve,reject)=>{
            $.post('/api/persons/',{name:inp_name.val(),age:inp_age.val(),city:inp_city.val()},(data,status)=>{if(status=='success'){done(data);resolve()}else reject(status)})})
        }

        submit_btn.click(()=>{
            add_person(refresh_persons_table).then(()=>
            {
                inp_age.val("")
                inp_name.val("")
                inp_city.val("")
            }
        ).catch(()=>console.log("Chill"));
        })
    }
)