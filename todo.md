Créer un fichier json avec une liste de todo à récupérer ou une liste de dashboard+task etc dans app.component

Créer une classe dashboard ayant comme attribut un tableau de listes
Récupérer dans app.component les dashboards pour les transmettre au header qui va afficher les différents dashboard disponible sous forme d'un menu
par défaut, le premier dashboard est affiché
si aucun dashboard n'existe, un dashboard vide sera créé
cliqué sur un dashboard dans le menu/header injectera les informations du dashboard dans un nouveau component

Les dashboards sont constitué de listes pouvant être déplacées pour changer l'ordre
une liste est constituée de tasks pouvant être déplacées pour changer l'ordre des tasks
une task est constitué d'un titre, d'une description, d'un état (en cours, achevé, annulé), d'une liste de subtasks pouvant elles même être déplacées, 
un attribut non obligatoire dans la classe task permettra aux subtasks de ne pas avoir elles même de subtasks pour ne pas plonger à l'infini


Il doit être possible de créer un dashboard, une liste, une task ou une subtask et de mettre à jour les informations
