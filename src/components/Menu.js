export const Menu = () => {

    const candy = () => {
        document.body.style.backgroundColor = "#F8E1F4";

        document.getElementsByClassName("card")[0].style.backgroundColor = "#F7F7F7";
        document.getElementsByClassName("card")[0].style.color = "#EFA8E4";
        document.getElementsByClassName("card")[0].style.borderColor = "#97E5EF";

        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#EFA8E4";

        document.getElementsByClassName("input")[0].style.backgroundColor = "#F7F7F7";
        document.getElementsByClassName("input")[0].style.borderColor = "#97E5EF";

        document.getElementsByClassName("button")[0].style.borderColor = "#97E5EF";
        document.getElementsByClassName("button")[0].style.color = "#EFA8E4";
        document.getElementsByClassName("button")[0].style.backgroundColor = "#F7F7F7";

        document.getElementsByClassName("button")[1].style.borderColor = "#97E5EF";
        document.getElementsByClassName("button")[1].style.color = "#EFA8E4";
        document.getElementsByClassName("button")[1].style.backgroundColor = "#F7F7F7";
    }

    const mariner = () => {
        document.body.style.backgroundColor = "#18A4E0";

        document.getElementsByClassName("card")[0].style.backgroundColor = "#FAF8F0";
        document.getElementsByClassName("card")[0].style.color = "#043353";
        document.getElementsByClassName("card")[0].style.borderColor = "#D3DDE6";

        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#043353";

        document.getElementsByClassName("input")[0].style.backgroundColor = "#FAF8F0";
        document.getElementsByClassName("input")[0].style.borderColor = "#D3DDE6";

        document.getElementsByClassName("button")[0].style.borderColor = "#D3DDE6";
        document.getElementsByClassName("button")[0].style.color = "#043353";
        document.getElementsByClassName("button")[0].style.backgroundColor = "#FAF8F0";

        document.getElementsByClassName("button")[1].style.borderColor = "#D3DDE6";
        document.getElementsByClassName("button")[1].style.color = "#043353";
        document.getElementsByClassName("button")[1].style.backgroundColor = "#FAF8F0";
    }

    const coffee = () => {
        document.body.style.backgroundColor = "#D5AD7D";

        document.getElementsByClassName("card")[0].style.backgroundColor = "#F3EFE3";
        document.getElementsByClassName("card")[0].style.color = "#9D513D";
        document.getElementsByClassName("card")[0].style.borderColor = "#C4B59F";

        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#9D513D";

        document.getElementsByClassName("input")[0].style.backgroundColor = "#F3EFE3";
        document.getElementsByClassName("input")[0].style.borderColor = "#C4B59F";

        document.getElementsByClassName("button")[0].style.borderColor = "#C4B59F";
        document.getElementsByClassName("button")[0].style.color = "#9D513D";
        document.getElementsByClassName("button")[0].style.backgroundColor = "#F3EFE3";

        document.getElementsByClassName("button")[1].style.borderColor = "#C4B59F";
        document.getElementsByClassName("button")[1].style.color = "#9D513D";
        document.getElementsByClassName("button")[1].style.backgroundColor = "#F3EFE3";
    }

    const autumn = () => {
        document.body.style.backgroundColor = "#98521A";

        document.getElementsByClassName("card")[0].style.backgroundColor = "#F7AF25";
        document.getElementsByClassName("card")[0].style.color = "#B21919";
        document.getElementsByClassName("card")[0].style.borderColor = "#B21919";

        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#EB6D18";

        document.getElementsByClassName("input")[0].style.backgroundColor = "#F7AF25";
        document.getElementsByClassName("input")[0].style.borderColor = "#B21919";

        document.getElementsByClassName("button")[0].style.borderColor = "#B21919";
        document.getElementsByClassName("button")[0].style.color = "#B21919";
        document.getElementsByClassName("button")[0].style.backgroundColor = "#F7AF25";

        document.getElementsByClassName("button")[1].style.borderColor = "#B21919";
        document.getElementsByClassName("button")[1].style.color = "#B21919";
        document.getElementsByClassName("button")[1].style.backgroundColor = "#F7AF25";
    }

    return (
        <div className="menu">
            <button className="theme1" onClick={() => { candy() }}> Candy </button>
            <button className="theme2" onClick={() => { mariner() }}> Mariner </button>
            <button className="theme3" onClick={() => { coffee() }}> Coffee </button>
            <button className="theme4" onClick={() => { autumn() }}> Autumn </button>
        </div>
    );
}