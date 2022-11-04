export default {
    name: "TheHeroThumb",

    props: {
        hero: Object
    },

    template: `
    <li>
        <img :src="" alt="hero img">
        <!-- <div class="sprite" id="cap"></div> -->
        <div class="red-bumper"></div>
        <h5>Captain America</h5>
    </li>
    `
}