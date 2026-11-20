# -*- coding: utf-8 -*-
# Niveau 6, leçon 5 : script à transformer en outil ArcToolbox.
# Paramètres à déclarer dans l'outil (dans cet ordre) :
#   0  Points d'entrée        Couche d'entités     Entrée
#   1  Distance               Unité linéaire       Entrée
#   2  Couche à découper      Couche d'entités     Entrée
#   3  Résultat               Classe d'entités     Sortie
import arcpy

entree = arcpy.GetParameterAsText(0)
distance = arcpy.GetParameterAsText(1)
zone = arcpy.GetParameterAsText(2)
sortie = arcpy.GetParameterAsText(3)

if arcpy.Describe(entree).shapeType != "Point":
    arcpy.AddError("La couche d'entree doit etre de type point.")
    raise SystemExit(1)

tampon = r"in_memory\tampon"
arcpy.AddMessage("Zone tampon de " + distance)
arcpy.Buffer_analysis(entree, tampon, distance, dissolve_option="ALL")
arcpy.AddMessage("Decoupage de " + zone)
arcpy.Clip_analysis(zone, tampon, sortie)
arcpy.Delete_management(tampon)
arcpy.AddMessage("Termine : " + sortie)
