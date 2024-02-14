Feature: Search for a product

Scenario Outline: Search for a product in home page
    Given a user has navigated to the homepage
    When the user search <product_name> in the home page
    Then Product <product_name> must be displayed
    And Product must be displayed with price and quantity
Examples:
    |   product_name    |
    |   "test"    |

Scenario: Search for a product in login page
    Given a user has navigated to the homepage
    When the user search "test" in the home page
    Then Product "test" must be displayed
    And Product must be displayed with price and quantity

Scenario: Search for a product in product page
    Given a user has navigated to the homepage
    When the user search "test" in the home page
    Then Product "test" must be displayed
    And Product must be displayed with price and quantity