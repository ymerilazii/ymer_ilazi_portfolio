from .models import SocialNetworks


def links_context(request):
    socialnetwork = SocialNetworks.objects.all()
    social = {}
    links = {}
    for i in socialnetwork:
        links[i.social] = (i.link, i.icon_code)
    social['social'] = links
    return social
