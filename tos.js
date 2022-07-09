const data = [
  {title: "Serveur", desc: "Le serveur doit être contre l'homophobie, le racisme ou toute autre forme de discrimination.<br>Le serveur dois respecter les tos de discord."},
  {title: "Data", desc: "Nous conservons les messages pour éxecuter les commandes et nous les effaçons après"}
];

for (let i = 0; i < data.length; i++) {
  var dat = data[i]
  document.getElementById('tos').innerHTML += '<h1>' + dat.title + '</h1>' + '<p>' + dat.desc + '</p>';
}
