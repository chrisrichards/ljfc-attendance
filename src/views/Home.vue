<template>
  <div class="mt-8 text-center">
    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
      Welcome to the Littleton Junior Football Club Attendance App
    </h2>
    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      This app helps you complete the attendance register and email it to the club.
    </p>
    <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
      <div class="relative">
        <dt>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>          
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">Step 1</p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          Add a team
        </dd>
      </div>
      <div class="relative">
        <dt>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>          
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">Step 2</p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          Add players and parent contact details to the team
        </dd>
      </div>
      <div class="relative">
        <dt>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>          
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">Step 3</p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          Add an event, select the players and parents in attendance and whether they have self assessed
        </dd>
      </div>
      <div class="relative">
        <dt>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>          
          <p class="ml-9 text-lg leading-6 font-medium text-gray-900">Step 4</p>
        </dt>
        <dd class="mt-2 ml-9 text-base text-gray-500">
          Email the event to LJFC
        </dd>
      </div>
    </dl>
    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Instead of entering the players and parent contact details here, you can import them from a CSV file or copy and paste from Excel. 
      To import, first create a team, click on the 'Players' button and then click on the 'Import' button, paste the CSV data and click the 
      'Import' button.
    </p>
    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Once you've created a team and players, you can create events by going to the Events page and clicking 'Add event'. 
      The date will default to the current date, and you check the players and parents in attendance. Click 'Save' to create the
      event, and then click 'email' to create an email populated with a list of all attendees that can be sent to the club.
    </p>
    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Please note that all data is stored in the browser, no data is stored on a server. To pass the player and parent contact details
      to someone else, export the player list and email the CSV data to the other person who can then import the data.
    </p>
    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md shadow">
        <router-link :to="{ name: 'CreateTeam' }" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Get started
        </router-link>
      </div>
    </div>
  </div>
</template>
