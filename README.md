# Movie Discovery Web Application

This web application allows users to search for movies, view movie details, and save their favorite movies. It consumes data from the TMDB API and provides a user-friendly interface for movie enthusiasts.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Demo

You can access the live demo of the Movie Discovery App [here](https://movie-discovery-app.up.railway.app/).


## Installation

Follow these steps to set up the Movie Discovery App locally:

1. Clone the repository to your local machine:

```
git clone https://github.com/elijaharhinful/hng-ftd-pjt2-movie-discovery-app.git
```
2. Navigate to parent directory:

```
cd hng-ftd-pjt2-movie-discovery-app
```
3. Install the required dependencies:

```
npm install
```
## Usage

To run the application locally, follow these steps:

1. Start the development server:

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the Movie Discovery App.

## API Integration

The Movie Discovery App integrates with the TMDB API to fetch movie data. Ensure you have an API key and Access token from TMDB and replace `REACT_APP_TMDB_API_KEY` and `REACT_APP_TMDB_ACCESS_TOKEN`  in your .env file with your actual details

```
REACT_APP_TMDB_API_KEY='YOUR_API_KEY'
REACT_APP_TMDB_ACCESS_TOKEN='YOUR_ACCESS_TOKEN'
```

## Error Handling

The application includes error handling to provide users with meaningful error messages in case of API failures or other issues. Error messages are displayed to guide users on what went wrong.

## Contributing

Contributions to this project are welcome. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Create a pull request detailing your changes.

