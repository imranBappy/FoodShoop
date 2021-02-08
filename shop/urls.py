from django.contrib import admin
from django.urls import path
from shop import views
urlpatterns = [
    path("",views.index,name="home"),
    path("about",views.about,name="about"),
    path("blog",views.blog,name="blog"),
    path("contact",views.contact,name="contact"),
    path("recipe",views.recip,name="recipe"),
    path('Sub_mail',views.sub_mail,name="sub_mail"),
]