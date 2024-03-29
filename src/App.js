import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import React, { Component } from "react";
import { marked } from "marked";

marked.use({
  breaks: true,
});

const defaultText = `
<p align="center"><img src="https://readme-typing-svg.herokuapp.com?font=Merriweather&duration=3000&pause=1500&color=00E9EE&center=true&vCenter=true&height=40&lines=Hey+there!+I'm+Hemant+Chaubey+%F0%9F%98%8E;a+FullStack+Developer+%E2%9D%84;a+web3+enthusiast+%F0%9F%92%BB;who+loves+to+build+%F0%9F%9B%A0;and+contribute+to+projects+%E2%9C%A8"></br>
<img src="https://visitor-badge-reloaded.herokuapp.com/badge?page_id=imhemantchaubey&color=ED5007&style=flat-square&logo">
<a href="https://www.linkedin.com/in/imhemantchaubey"><img src="https://img.shields.io/badge/-LinkedIn-0e76a8?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://imhemantchaubey.codes/"><img src="https://img.shields.io/badge/Portfolio-3b5998?style=flat-square&logo=google-chrome&logoColor=white"></a>
<a href="https://www.twitter.com/imhemantchaubey"><img src="https://img.shields.io/badge/-Twitter-00acee?style=flat-square&logo=Twitter&logoColor=white"></a></p>

__Glad to see you here! 👋__
- I'm a third year undergraduate in Computer Science 🎓 from TCET ( Thakur College of Engineering and Technology ), Mumbai, India...
- I'm a passionate learner who's always willing to learn and work across technologies and domains...
- I love to explore new technologies and leverage them to solve real-life problems...
- I'm currently into FullStack Development ❄ and working on my Data Structures and Algorithms...
- Apart from these, I have also worked on some Android & Machine Learning projects...

__More about me and my projects 😎__
- 🛠 I’m currently working with Javascript, Reactjs, Nodejs, MongoDB, Java, etc...
- 🚀 I’m currently exploring the Full Stack Development...
- 👨🏻‍💻 Most of my projects are available on [Github](https://github.com/imhemantchaubey)
- 💬 Ask me about anything [here](https://www.linkedin.com/in/imhemantchaubey)! I am happy to help...
- 📫 How to reach me: imhemantrchaubey@gmail.com
- 📝 Checkout my [Resume](https://drive.google.com/file/d/1c7lx-pQsoQi7p7fc2i1A7Upyi8aUIWmg/view)

__My absolute favorites 💚__
- 💻 exploring new tools and technologies and building cool stuffs...
- 🚲 cycling, music (listening as well as singing), internet surfing...
- 🎧 coding for hours while enjoying lofi...
- 📰 reading tech blogs in my free time...
- 🍕 meetups & tech events...

<b>Tools & Technologies I'm well versed with 🛠</b></br>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg" alt="android" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg" alt="androidstudio" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/centos/centos-original.svg" alt="centos" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg" alt="ubuntu" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" alt="heroku" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="40" height="40"/> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg" alt="canva" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="figma" width="40" height="40"/> 

<b>Languages I know 💻</b></br>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="mysql" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> 

<b>Frameworks I know ❄</b></br>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="nextjs" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" width="40" height="40"/> 

<details>
  <summary><b>Github Activity Graph 🌟</b></summary>
  <img width="100%" src="https://activity-graph.herokuapp.com/graph?username=imhemantchaubey&theme=dracula&hide_border=true"/>
</details>

<details>	
  <summary><b>Github Stats 🍀</b></summary>
  <img height="160em" src="https://github-readme-stats.vercel.app/api?username=imhemantchaubey&show_icons=true&hide_border=true&&count_private=true&include_all_commits=true&theme=dark" /> <img height="160em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=imhemantchaubey&show_icons=true&hide_border=true&layout=compact&theme=dark"/>
</details>

<details>
  <summary><b>Github Streaks 🔥</b></summary>
  <img height="160em" src="https://github-readme-streak-stats.herokuapp.com/?user=imhemantchaubey&theme=dark&hide_border=true"/>
</details>

<b>Where to find me 🌍</b></br>
<a href="https://www.facebook.com/imhemantchaubey"> <img alt="facebook" width="40px" src="https://camo.githubusercontent.com/8f245234577766478eaf3ee72b0615e99bb9ef3eaa56e1c37f75692811181d5c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667" /></a> <a href="https://www.instagram.com/imhemantchaubey"> <img alt="instagram" width="40px" src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" /></a> <a href="https://telegram.im/@imhemantchaubey"> <img alt="telegram" width="40px" src="https://i.imgur.com/8uCq4fi.png" /> </a> <a href="https://open.spotify.com/user/3157h7mwmuodojr2hk62ck2vgq5i"> <img alt="spotify" width="40px" src="https://i.imgur.com/TuGJlcZ.png" /> </a> <a href="https://myanimelist.net/profile/imhemantchaubey"> <img alt="myanimelist" width="40px" src="https://i.imgur.com/TnZcuA4.png" /></a> 

------
<p align="center">Show some ❤ by <img src="https://imgur.com/o7ncZFp.jpg" height="16px" width="16px"> some repositories...</p>
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentEditor: defaultText,
      contentPreview: marked.parse(defaultText),
    };

    this.preview = this.preview.bind(this);
  }

  preview(event) {
    this.setState({
      contentEditor: event.target.value,
      contentPreview: marked.parse(event.target.value),
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Editor
              contentEditor={this.state.contentEditor}
              onchange={this.preview}
            />
          </div>
          <div className="col-md-6">
            <Preview contentPreview={this.state.contentPreview} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
