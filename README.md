<!-- <p align="center">
    <img height="128" alt="HamHero Banner" src="https://github.com/Vulp35/HamHeroJS/assets/45741898/f69e68c6-6344-43d8-bfed-8afc1f512644">
</p> -->

![A pig flying with a cape infront of a blurred out radio waterfall and the text "HamHero" next to it.](https://github.com/Vulp35/HamHeroJS/assets/45741898/f69e68c6-6344-43d8-bfed-8afc1f512644)

## About

HamHeroJS is a information bot for Amateur Radio communities on Discord. The original bot was created using Python but was moved to NodeJS.

<br>

## TODO

### Things to get done to have feature parity with the original bot

-   [ ] Change bot presence to cycle listening frequencies or something similar

-   [ ] Core commands

    -   [ ] `/repeater`: Repeater network information
    -   [ ] `/cond`: Solar conditions (Source: hamqsl.com)
    -   [ ] `/muf`: Maximum Usable Frequency information (Source: prop.kc2g.com)
    -   [ ] `/fof2`: Frequency of F2 Layer (NVIS) information (Source: prop.kc2g.com)
    -   [ ] `/drap`: D Region Absorption Prediction map
    -   [ ] `/utc`: Time in UTC
    -   [ ] `/call` [callsign]: Callsign information (Sources: HamQTH, callook.info)
    -   [ ] `/dx` [prefix]: DXCC information about a call prefix
    -   [ ] `/about`: About the bot
    -   [x] `/uptime`: Bot uptime
    -   [ ] `/help`: List all commands and what they do. _(May not be needed anymore? 🤷‍♂️)_

-   [ ] Admin commands

    -   [ ] `/code`: Set repeater status

### Features to add or keep in mind

-   [ ] Make commands available via permissions
-   [ ] `/code` Needs to be refactored so it can be used on multiple servers without changing status on others
