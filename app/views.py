# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""
from pprint import pprint

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.template import loader
from django.http import HttpResponse
from django import template
from .models import TwitterSettings


@login_required(login_url="/login")
def index(request):
    context = {}
    context['segment'] = 'index'

    html_template = loader.get_template('index.html')
    return HttpResponse(html_template.render(context, request))


@login_required(login_url="/login")
def pages(request):
    context = {}
    # All resource paths end in .html.
    # Pick out the html file name from the url. And load that template.
    try:

        load_template = request.path.split('/')[-1]
        context['segment'] = load_template

        html_template = loader.get_template(load_template)
        return HttpResponse(html_template.render(context, request))

    except template.TemplateDoesNotExist:

        html_template = loader.get_template('page-404.html')
        return HttpResponse(html_template.render(context, request))

    except:

        html_template = loader.get_template('page-500.html')
        return HttpResponse(html_template.render(context, request))


def settings(request):
    if not request.user.is_authenticated:
        redirect('/')

    if request.method == 'POST':
        twitter_username = request.POST.get('twitter-user')
        twitter_password = request.POST.get('twitter-pass')
        try:
            db_user = TwitterSettings.objects.get(user=request.user)
            db_user.username = twitter_username
            db_user.password = twitter_password
            db_user.save()
            return HttpResponse(db_user.username)
        except TwitterSettings.DoesNotExist:
            twitter_settings = TwitterSettings.objects.create(username=twitter_username, password=twitter_password, user=request.user)
            twitter_settings.save()
            return HttpResponse(twitter_settings)

    if request.method == 'GET':
        db_user = TwitterSettings.objects.get(user=request.user)
        return HttpResponse(db_user.username)