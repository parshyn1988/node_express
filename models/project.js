const projects = [
    {
        title: 'Summer House',
        img: {
            src: '/images/house5.jpg',
            alt: 'Summer House'
        }
    },
    {
        title: 'Brick House',
        img: {
            src: '/images/house2.jpg',
            alt: 'Brick House'
        }
    },
    {
        title: 'Renovated',
        img: {
            src: '/images/house3.jpg',
            alt: 'Renovated'
        }
    },
    {
        title: 'Brick House',
        img: {
            src: '/images/house5.jpg',
            alt: 'Brick House'
        }
    },
    {
        title: 'Renovated',
        img: {
            src: '/images/house4.jpg',
            alt: 'Renovated'
        }
    },
    {
        title: 'Barn House',
        img: {
            src: '/images/house3.jpg',
            alt: 'Renovated'
        }
    }
];

module.exports = class Project {
    constructor(title, imgSrc) {
        this.title = title;
        this.img = {
            src: imgSrc,
            alt: title,
        };
    }

    save() {
        console.log(' Project this ', this);
        projects.push(this);
    }

    static getAll() {
        return projects;
    }
}
