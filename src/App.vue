<template>
  <div>
    <header>
        <nav>
            <input type="checkbox" id="checkbox-menu">
            <label for="checkbox-menu">
                <ul class="menu touch">
                  <li><router-link to="/articles" v-bind:class="{ active: $route.name == 'articles' }">Статьи</router-link></li>
                  <li><router-link to="/news" v-bind:class="{ active: $route.name == 'news' }">Новости</router-link></li>
                  <li><router-link to="/lessons" v-bind:class="{ active: $route.name == 'lessons' }">Видеоуроки</router-link></li>
                  <li><router-link to="/tasks" v-bind:class="{ active: $route.name == 'tasks' }">Задачи</router-link></li>
                  <li><router-link to="/login" class="login" v-bind:class="{ active: $route.name == 'login' }">Войти</router-link></li>
                </ul>
                <span class="toogle">☰</span>
            </label>
        </nav>
    </header>

    <router-view class="router-view"></router-view>

    <footer>
      <div class="footer-links">
        <li><router-link to="/about" v-bind:class="{ active: $route.name == 'about' }">О нас</router-link></li>
        <li><router-link to="/regulations" v-bind:class="{ active: $route.name == 'regulations' }">Правила</router-link></li>
        <li><router-link to="/users" v-bind:class="{ active: $route.name == 'users' }">Пользователи</router-link></li>
        <li><router-link to="/feedback" v-bind:class="{ active: $route.name == 'feedback' }">Обратная связь</router-link></li>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<!-- "scoped" attribute to limit CSS to this component only -->
<style>
* {
  padding: 0;
  margin: 0;
  font-weight: 400;
  line-height: 24px;
  font-family: 'Roboto Condensed', sans-serif;
}
.router-view {
  padding: 10px 40px;
}
@font-face {
  font-family: dirt;
  src: url(./fonts/dirt.ttf);
}
.dirt {
  font-family: dirt;
}
body, 
html {
    overflow-x: hidden;
}
nav {
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
}
#checkbox-menu, 
.toogle {
    display: none;
}
.menu {
    padding: 0;
    margin: 0;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
}
.menu li a {
    color: #000;
    text-decoration: none;
    align-self: center;
    font-size: 13px;
    padding: 10px 15px;
    transition: background .2s linear;
}
.menu li a.active {
    text-decoration: underline;
}
.menu li a:hover {
    background: #ffcc01;
    border-radius: 3px;
}
.menu li a.login {
    background: #000;
    color: #fff;
    border-radius: 3px;
}
.menu li a.login.active {
    color: #ffcc01;
}
.menu li a.login:hover {
    color: #ffcc01;
}
footer {
    margin: 0;
    background: #000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.footer-links {
    padding: 0;
    margin: 0;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
}
.footer-links a {
    color: #fff;
    text-decoration: none;
    align-self: center;
    font-size: 11px;
    padding: 10px 15px;
    transition: background .2s linear;
}
.footer-links a:hover {
    color: #ffcc01;
}
.footer-links a.active {
    color: #ffcc01;
}

@media screen and (max-width: 765px) {
    .toogle {
        clear: both;
        display: block;
        text-align: center;
        font-size: 18px;
        line-height: 40px;
        width: 100%;
        color: 000;
        background: #ffcc01;
        transition: all .1s linear;
    }
    .toogle:hover {
        background: #d3a900;
    }
    #checkbox-menu:checked + label .touch li {
        opacity: 1;
        visibility: visible;
        transition: all .7s linear;
    }
    #checkbox-menu:checked + label .touch {
        height: 230px;
    }
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 0;
        transition: height .3s linear;
    }
    .menu li {
        display: flex;
        align-self: center;
        width: 95%;
        opacity: 0;
        visibility: hidden;
    }
    .menu li a {
        width: 95%;
        text-align: center;
        align-self: center;
        align-content: center;
    }
    .menu li a.logo {
        font-size: 20px;
        margin-right: 0;
    }
    .menu li a.contacts {
        margin-right: 0;
    }
    
}
</style>


