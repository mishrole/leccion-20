var coders = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán","Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
"Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor","Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo","Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

function image(name){
	return "assets/img/students/" + (name + 1) + ".png";
}

function insert(element){

	var div = document.createElement("div");
	var figure = document.createElement("figure");
		figure.setAttribute("class","coder");
	var img = document.createElement("img");
	var index = coders.indexOf(element);
		img.setAttribute("src",image(index));
		img.setAttribute("alt",element);
	var textImg = document.createElement("figcaption");
	var span = document.createElement("span");
		span.innerText = coders[index]

	textImg.appendChild(span);
	figure.appendChild(img);
	figure.appendChild(textImg);
	div.appendChild(figure);

	return div;

}


window.addEventListener("load",function(e){
  var codersInsert = coders.forEach(function(e){
    document.getElementById("coders").appendChild(insert(e));
  });
})