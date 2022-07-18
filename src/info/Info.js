import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)", "rgb(170, 1, 20)"];


export const info = {
    firstName: "Ben",
    lastName: "Rees",
    initials: "br", 
    position: "A Computer Science Student @ Swansea University",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    subColour: colors[2],
    qualifications: [
        {
            label: 'Computer Science BsC at Swansea University (in progress)',
        },
        {
            label: 'Level 3 BTEC in Computing and IT (4 A-Level equivalent)',
        },
        {
            label: '11 GCSE qualifications (inc. Maths, English, Science)',
        }
    ],
    miniBio: [ 

        {
            emoji: '🌎',
            text: 'based in Wales, Swansea'
        },
        {
            emoji: "💼",
            text: "Computer Science Student @ Swansea University"
        },
        {
            emoji: "📧",
            text: "benreeseng@gmail.com"
        },
    ],
    socials: [
        {
            link: "https://github.com/benjirees",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/ben-rees-59a947234/",
            icon: "fa fa-linkedin"
        }


    ],
    bio: "Hello! I'm Ben. I'm a Computer Science Student at Swansea University. I studied Computing & IT at college. I have many years of programming experience creating academic, industrial and personal projects which can be seen on my github. I am looking for a software engineering/general developer role.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'html5', 'css', 'java', 'python', 'git', 'r'],
            exposedTo: ['c#', 'angular', 'scala']
        }
    ,
    hobbies: [
        {
            label: 'programming',
           
        },
        {
            label: 'gaming',
            
        },
        {
            label: 'formula 1',
            
        },
        {
            label: 'running',
            
        }

    ],
    portfolio: [ 
        {
            title: "This website (react, js, html, scss)",
            live: "https://benjirees.github.io/benrees/", 
            source: "https://github.com/benjirees/benrees", 
            image: mock1
        },
        {
            title: "BIM Dashboard (react, js, html, css, jsx)",
            live: "https://benjirees.github.io/bimdashboard/",
            source: "https://github.com/benjirees/bimdashboard",
            image: mock2
        },
        {
            title: "Admin Dashboard (react, js, html, css, jsx)",
            live: "https://benjirees.github.io/benrees/",
            source: "https://github.com/benjirees/benrees",
            image: mock3
        },
        {
            title: "JavaScript Games (html, css, js)",
            live: "https://benjirees.github.io/JavaScriptGames/",
            source: "https://github.com/benjirees/JavaScriptGames",
            image: mock4
        },
        {
            title: "ISS Tracker (html, css, js, 2x Rest APIs)",
            live: "https://benjirees.github.io/ISSTracker/",
            source: "https://github.com/benjirees/ISSTracker",
            image: mock5
        }
    ]
}