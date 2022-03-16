const skills = [
    {id: 123456, skill: 'HTML', acquired: true},
    {id: 234567, skill: 'JavaScript', acquired: true},
    {id: 345678, skill: 'Python', acquired: false},
    {id: 456789, skill: 'CSS', acquired: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.acquired = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}