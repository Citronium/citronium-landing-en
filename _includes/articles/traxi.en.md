# Traxi Trailer

**Service for renting trailers and trailers via the app**

To transport bulky goods in Germany, you need to find those who can load, transport and unload them. Then everyone needs to pay separately and spend their time managing this process.

From this came the idea of a service for quick rental of trailers and trailers through the application. If the physical training and driving skills are at a good level, then the user can handle the transportation of goods on their own.

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-1-overview.png" alt="Traxi Trailer: overview image"/>
</figure>

## Goals and Objectives

1. Using geolocation to determine the location of the client and show the nearest parking lots with trailers, their availability and characteristics.
2. Filtering of vehicles by size, load capacity and rental cost.
3. The ability to independently take a trailer from the parking lot and return it back. That is, there should be a function of opening and closing the lock using the application.

## Solution

The user registers in the application. Identification takes place according to the standard carsharing scheme. Next, on the map, you can determine the point closest to you with trailer parking. The map can be enlarged.

There is a "Find the right trailer" button on the screen. The user is asked to filter trailers by the desired size, load capacity and rental cost. After applying the filter, parking lots that do not have the desired model disappear from the map.

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-2-logination-and-searching.png" alt="Traxi Trailer: overview image"/>
    <figcaption>Login and trailer search</figcaption>
</figure>

Next, the trailer /trailer that is suitable for the tasks and closest to the user is rented. You can choose the option of hourly or daily rent. The lock on the rack with the trailer is opened using a QR code, which must be scanned in the application.

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-3-take-back-trailer.png" alt="Traxi Trailer: overview image"/>
    <figcaption>Instructions on how to take/ return the trailer</figcaption>
</figure>

After use, the trailer must be returned to the parking lot to the same rack on its own. Rent is paid online according to the time spent. The card and payment methods are linked at the time of registration.

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/traxi/traxi-4-payment.png" alt="Traxi Trailer: overview image"/>
    <figcaption>Trailer payment</figcaption>
</figure>
