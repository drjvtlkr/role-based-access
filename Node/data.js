const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'Dheeraj', role: ROLE.ADMIN },
        { id: 2, name: 'Rocky', role: ROLE.BASIC },
        { id: 3, name: 'Rohan', role: ROLE.BASIC }
    ],
    projects: [
        { id: 1, name: "Dheeraj's Project", userId: 1 },
        { id: 2, name: "Rocky's Project", userId: 2 },
        { id: 3, name: "Rohan's Project", userId: 3 }
    ]
}