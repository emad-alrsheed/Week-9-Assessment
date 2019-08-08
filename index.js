const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.json('emad');
});





app.post('/',(req, res) =>{

        const newarr = req.body;
        tasks.push(newarr);
        res.json(tasks);
    });

    
    

})
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks.forEach((elem, index) => {
        if(elem.id === id) {
            // delete tasks[index]
            tasks.splice(index, 1);
        }
    });

    res.json(tasks);
});
