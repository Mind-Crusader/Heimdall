from django.shortcuts import render


# Create your views here.
def sideline(request):
    # render function takes argument  - request
    # and return HTML as response
    return render(request, "sidelined.html")
