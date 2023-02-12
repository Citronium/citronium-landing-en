# Traxi Trailers

**Service for automated rental of trailers via the application**

The process of cargo transportation in Germany is quite time-consuming. To move an oversize load, first one need to find someone who can move it, someone to load and someone to unload. Everyone is paid and managing this process takes much time.

So the idea of a service for the automated rental of trailers came up. If the user’s physical state and driving skills are good, they can deal with the cargo transportation on their own. 


<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-1-overview.png" alt="Traxi Trailers: overview image"/>
</figure>

## Goals and Objectives

1. User’s geolocation should be used to show the nearest trailer parking lots, trailers, their availability and characteristics.
2. Filtering trailers by size, load capacity and rental price.
3. User’s ability to take the trailer from the parking lot and return it back. The app should have an unlock and lock feature.

## Solution

The user registers in the application. The identification is standard for a car-sharing scheme. On the map, the user can see the closest trailer parking lot. The map can be zoomed in.

There is a Find a Trailer button on the screen. The user can search available trailers by size, load capacity and rental price.
After applying the filter, the parking lots with trailers without the necessary characteristics disappear from the map.


<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-2-logination-and-searching.png" alt="Traxi Trailers: overview image"/>
    <figcaption>Logging in and trailer search</figcaption>
</figure>

Then the user rents the closest and the most suitable trailer. There is an option of hourly or daily rent.
The lock on the trailer stand is opened with the QR code that is scanned in the app. 

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-3-take-back-trailer.png" alt="Traxi Trailers: overview image"/>
    <figcaption>Instruction for taking / returning the trailer</figcaption>
</figure>

After using the trailer, the user should return it to the same stand in the same parking lot. The rent is paid online according to the time of use. The card and payment methods are chosen at the registration in the app.

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-4-payment.png" alt="Traxi Trailers: overview image"/>
    <figcaption>Trailer payment</figcaption>
</figure>
