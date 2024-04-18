<template>
    <main>
        <div id="title-container">
            <h2>Comment jouer ?</h2>
        </div>
        <div id="list-container">
            <ul>
                <li>1 - En cliquant sur le bouton "jouer", vous allez avoir accès à une liste d'images floutées.</li>
                <li>2 - Vous pouvez faire coulisser les images avec votre doigt (mobile) ou votre souris (ordinateur)</li>
                <li>3 - Une fois votre choix fait, vous pouvez cliquer sur l'image, et un formulaire de réponse apparaîtra.</li>
                <li>4 - Vous disposez de cinq essais. Pour chaque échec, la photo deviendra de plus en plus claire</li>
            </ul>
        </div>
    </main>
    
</template>

<script></script>
<style lang="scss" scoped>
main {
    opacity: 0;
    animation: appear .5s .3s ease-in-out forwards;

    #title-container {
        overflow-x: hidden;
        margin: 50px auto;

        h2 {
            transform: translateX(-100%);
            animation: move-left .5s .3s ease-in-out forwards;
        }
    }

    #list-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        flex-direction: column;
        text-align: justify;
        height: 100%;
        padding: 0 20px 0 0;
        ul {
            overflow-x: hidden;
            li {
             margin: 10px auto;
             transform: translateX(-550px);
            }
        }
        
    }
}

@keyframes move-left {
    100% {
        transform: translateX(0);
    }
}

/* loop */
@for $i from 1 through 5 {
  li:nth-child(#{$i}) {
    animation: move-left 0.5s #{$i * 0.3s} forwards;
  }
}
</style>