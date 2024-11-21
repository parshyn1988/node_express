const employees = [
    {
        name: 'John Doe',
        role: 'CEO & Founder',
        img: {
            src: '/images/team2.jpg',
            alt: 'John Doe'
        },
        description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
    },
    {
        name: 'Jane Doe',
        role: 'Architect',
        img: {
            src: '/images/team1.jpg',
            alt: 'Jane Doe'
        },
        description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
    },
    {
        name: 'Mike Ross',
        role: 'Architect',
        img: {
            src: '/images/team3.jpg',
            alt: 'Mike Ross'
        },
        description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
    },
    {
        name: 'Dan Star',
        role: 'Architect',
        img: {
            src: '/images/team4.jpg',
            alt: 'Dan Star'
        },
        description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
    },
];

module.exports = class Employee {
    constructor(name, role, imgSrc, description) {
        this.name = name;
        this.role = role;
        this.img = {
            src: imgSrc,
            alt: name,
        };
        this.description = description;
    }

    save() {
        employees.push(this);
    }

    static getAll() {
        return employees;
    }
};
