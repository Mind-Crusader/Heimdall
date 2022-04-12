"""Django4Project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django import http
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from accounts.views import HomeLoginView
from .views import sideline

urlpatterns = [
    path('/', HomeLoginView.as_view(), name="home_login"),
    path('', HomeLoginView.as_view(), name="home_login"),
    path('admin/', admin.site.urls),
    path('health', lambda req: http.HttpResponse(200)),
    path('accounts/', include('accounts.urls', namespace='accounts')),
    path('applicant/', include('applicant.urls', namespace='applicant')),
    path('institution/', include('institution.urls', namespace='institution')),
    path('applications/', include('applications.urls', namespace='applications')),
    path('transaction/', include('transaction.urls', namespace='transaction')),
    path('settings/', include('settings.urls', namespace='settings')),
    path('ckeditor/', include('ckeditor_uploader.urls')),

]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns = [
                      path('__debug__/', include(debug_toolbar.urls)),
                  ] + urlpatterns

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.FORCE_STATIC_FILE_SERVING and not settings.DEBUG:
    settings.DEBUG = True
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    settings.DEBUG = False

admin.site.site_header = "Heimdall Admin"
admin.site.site_title = "Heimdall Admin Portal"
admin.site.index_title = "Heimdall to Finder Researcher Portal"
