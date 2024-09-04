

# News Monkey

News Monkey is a React application that provides the latest news headlines across various categories. The app leverages the [News API](https://newsapi.org/) to fetch and display top headlines, with an easy-to-use interface for navigating through different news categories.

## Features

- **Multiple Categories**: Browse news across various categories including Business, Entertainment, General, Health, Science, Sports, and Technology.
- **Pagination**: Navigate through pages of news articles using Previous and Next buttons.
- **Loading Indicator**: Display a spinner while news articles are being fetched.

## Components

1. **News**: The main component that fetches and displays news articles based on the selected category and country.
2. **NewsItem**: Displays individual news articles with a title, description, image, and source.
3. **Spinner**: Shows a loading spinner while news articles are being fetched.
4. **Navbar**: Provides navigation links to different news categories.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/news-monkey.git
    ```

2. Navigate into the project directory:
    ```bash
    cd news-monkey
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

## Configuration

- **News Component**:
  - `country` (default: 'in'): The country code for fetching news (e.g., 'us' for United States).
  - `pageSize` (default: 5): Number of news articles to display per page.
  - `category` (default: 'science'): The category of news to fetch (e.g., 'business', 'technology').

- **API Key**: Ensure that you have replaced the placeholder API key in the `News` component with your actual News API key for fetching news data.

## Usage

1. **Home Page**: The home page displays the latest news headlines for the 'general' category.
2. **Category Pages**: Use the navbar to navigate to different news categories.
3. **Pagination**: Use the Previous and Next buttons to navigate through pages of news articles.

## Code Overview

### `News.js`

Fetches news articles from the News API based on the specified country and category. Implements pagination and manages loading state.

### `NewsItem.js`

Displays individual news articles with the title, description, image, and source.

### `Spinner.js`

Displays a loading spinner when news articles are being fetched.

### `Navbar.js`

Provides navigation links to different news categories.

### `App.js`

Sets up routing for different news categories and renders the `Navbar` and `News` components.

## Contributing

Feel free to fork the repository and submit pull requests. Please ensure that your contributions adhere to the existing code style and include relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/yourusername/news-monkey/issues).

---

