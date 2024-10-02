function gen() {
    let gen = document.getElementById("gen");
    let resdiv = document.getElementById("resdiv");
    let resimg = document.getElementById("resimg");
    fetch("/assets/boxing/json/miis.json")
        .then((res) => res.json())
        .then((data) => {
            mii = data;
            mii.sort(function (a, b) {
                a = a.name.toLowerCase();
                b = b.name.toLowerCase();
          
                return a < b ? -1 : a > b ? 1 : 0;
            })

            for (let i = 0; i < mii.length; i++) {
                let btn = document.createElement("button");
                btn.innerHTML = "<img src='assets/boxing/img/" + mii[i].name + ".png'>" + mii[i].name;
                btn.id = "miiBtn";
                btn.onclick = function () {
                    resdiv.innerHTML = mii[i].name;
                    resimg.src = "assets/boxing/img/" + mii[i].name + ".png";
                };
                gen.appendChild(btn);

                if (mii[i].isPicked == true) {
                    btn.disabled = true;
                    btn.innerHTML = "<img src='assets/boxing/img/" + mii[i].name + ".png'>" + mii[i].name + " [PICKED]";
                }
            }
            
        })
        .catch((e) => {
            console.error(e);
            throw new Error("Failed to load themes");
        });
}

function submitMii() {
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLScZkmsQ_7kH-g56rE3tdRzshBO6Q-9-Aqexyf10KX85-xNWog/formResponse?&submit=Submit?usp=pp_url&entry.31186396=" + document.getElementById("name").value + "&entry.2120795591=prex&entry.688636066=" + document.getElementById("resdiv").innerHTML + "&entry.972278117=blank",
        '_blank'
      );
} 

function submitEC() {
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLScZkmsQ_7kH-g56rE3tdRzshBO6Q-9-Aqexyf10KX85-xNWog/formResponse?&submit=Submit?usp=pp_url&entry.31186396=" + document.getElementById("name").value + "&entry.2120795591=findmii&entry.688636066=blank&entry.972278117=" + document.getElementById("entry").value,
        '_blank'
      );
}
