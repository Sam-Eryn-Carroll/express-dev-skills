const skills = [
    {id: 123456, skill: 'HTML', acquired: true},
    {id: 234567, skill: 'JavaScript', acquired: true},
    {id: 345678, skill: 'Python', acquired: false},
    {id: 456789, skill: 'CSS', acquired: true}
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}