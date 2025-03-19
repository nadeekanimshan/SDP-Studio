import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual Google API client ID
const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your actual Google API key
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: SCOPES,
        })
        .then(() => {
          gapi.auth2.getAuthInstance().signIn().then(listUpcomingEvents);
        });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const listUpcomingEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      })
      .then((response) => {
        setEvents(response.result.items);
      });
  };

  return (
    <div>
      <h2>Google Calendar Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.summary} - {new Date(event.start.dateTime).toLocaleString()}
          </li>
        ))}
      </ul>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FColombo&showPrint=0&src=OGNlYzljNjg2NTMwZmU4YjE4MGVjOGIzYTQzYmMwNDk1Mzg4NmIxMjFkZmQ0NjgzNmE3MmQzYmY5OGJhOTJkNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26"
        style={{ border: "solid 1px #777" }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;