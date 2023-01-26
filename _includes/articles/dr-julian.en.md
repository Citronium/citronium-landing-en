# Dr. Julian

Telemedicine technologies in psychology and psychiatry.

The idea of the project belongs to the British practicing psychiatrist Dr. Julian Nesbit.
Its goal is to make highly demanded services of psychologists and psychiatrists more accessible.

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/dr-julian/dr-julian-1-overview.png" alt="Dr. Julian: overview image"/>
</figure>

## Goals and objectives

1. Passing the diagnosis by the patient.
1. Getting recommendations and prescriptions based on responses.
1. Getting information about the doctor, and selecting a doctor according to the parameters
1. Make an appointment inside the app.
1. Conducting receptions using a video call inside the application.
1. Payment for consultation within the application using Stripe and Apple pay systems.
1. For doctors: electronic patient's medical history, the ability to specify free windows in the schedule data encryption, including video calls.

## Solution

Given the sensitivity of the topic, one of the most important issues was the confidentiality of user data. To ensure security, we used cryptographic protection.

Many innovations have been introduced in the implementation of the function of video calls.

Careful study of this functionality allowed to provide fast and uninterrupted video communication for communication between patients and doctors.

## How it works

After downloading the application, the user first of all undergoes testing for the level of anxiety and the presence of depression.
If the patient needs an urgent consultation --- the application suggests contacting a specialist hotline immediately.

Based on the answers to the questions of the diagnostic test, the user is offered counseling psychologists.

The client can independently choose a convenient time for the consultation and receive notifications reminding of the upcoming call.

Payment for the services of psychologists and psychiatrists takes place inside the application.

### User's personal account

When searching for a doctor, the patient can filter specialists by their specialization, language of communication, type of therapy, method of communication and employment.
He can also search for a certain consultant by last name and first name.

If the client doubts the choice of a specialist, he can ask the doctor a question in a personal message beforehand.
In order to evaluate the effectiveness of the treatment received, the user is offered to retest from time to time.

### Specialist's personal account and admin panel

After registration, the psychologist indicates in the application the hours of reception convenient for him and can view the list of patients who have signed up for him in the calendar along with brief information about the meeting.

After the video call, the doctor writes out appointments for the patient in the application and leaves notes to view the medical history later.

All transactions and schedules of scheduled and held meetings for the day, week, month, year are available in the personal account.

The application is administered through a separate closed system, in which user management and viewing statistics on payments and application usage are available.
