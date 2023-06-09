const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;

app.use(cors());
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Courses API Running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '11') {
        res.send(courses);
    }
    else {
        const category_courses = courses.filter(n => n.category_id === id);
        res.send(category_courses);
    }
});


app.listen(port, () => {
    console.log('Learning Lab Server running on port', port);
})