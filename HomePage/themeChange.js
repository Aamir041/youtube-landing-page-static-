let dark = false;

const body = document.getElementById("body");

const second_nav = document.getElementById("second-nav");

const up_nav = document.querySelector(".main-nav");

const iconColor = document.querySelectorAll(".icons");

const yt_logo = document.getElementById("yt-logo");

const search_input_bar = document.getElementById("search-input-bar");

const search_input = document.querySelector(".search-input");

const divider = document.querySelectorAll(".divider");

const current_tag = document.querySelector("#current-tag")

const tags = document.querySelectorAll("#second-nav div");

const selectedSideNavItem = document.querySelector(".selected");

const changeTheme = () => {
    if(!dark){
        body.style.backgroundColor = "#0f0f0f";
        
        body.style.color="white";
        
        second_nav.style.backgroundColor = "#0f0f0f";
        
        up_nav.style.backgroundColor="#0f0f0f";
        
        yt_logo.src="./images/youtube logo dark mode.png"

        iconColor.forEach(ele => {
            ele.style.color="white";
        })

        changeSearchBar("dark");

        divider.forEach(bar => {
            bar.style.borderTop="2px solid #1e1e1e";
        })

        changeSecondNav("dark");

        selectedSideNavItem.style.backgroundColor="#272727";

    }
    else{
        
        body.style.backgroundColor = "white";
        
        body.style.color="black";
        
        second_nav.style.backgroundColor = "white";
        
        up_nav.style.backgroundColor="white";
        
        yt_logo.src="./images/youtube-logo-icon.png"
        
        iconColor.forEach(ele => {
            ele.style.color="black";
        })

        changeSearchBar("white");

        divider.forEach(bar => {
            bar.style.borderTop="2px solid #eaeaea";
        })

        changeSecondNav("white");

        selectedSideNavItem.style.backgroundColor="#f2f2f2";
    }
    dark=!dark
}

const changeSearchBar = (theme) => {
    if(theme === "white") {

        
        search_input_bar.style.backgroundColor="white";
        
        search_input_bar.style.color="black";
        
        search_input.style.border="3px solid #d3d3d3";
        
        search_input.style.backgroundColor="white"

        search_input_bar.style.borderRight="3px solid #d3d3d3";
    }
    else if(theme === "dark") {
        
        search_input_bar.style.backgroundColor="#0f0f0f";
        
        search_input_bar.style.color="white";

        search_input.style.border="3px solid #222222";
        
        search_input.style.backgroundColor="#222222";

        search_input_bar.style.borderRight="3px solid #222222";
    }
}

const changeSecondNav = theme => {
    if(theme === "white") {


        tags.forEach(tag => {
            tag.style.backgroundColor="#f2f2f2";
        })
        current_tag.style.backgroundColor = "black";
        current_tag.style.color="white";

    }
    else if(theme === "dark") {

        tags.forEach(tag => {
            tag.style.backgroundColor="#272727";
        })
        current_tag.style.backgroundColor = "white";
        current_tag.style.color="black";

    }
}