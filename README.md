# Interview

Opna’s platform helps climate project developers get the funding they need to scale their projects, by connecting them with financiers (e.g. corporates and financial institutions) who can provide capital. 

Project developers add information about their projects and its financing needs using our UI so that these projects can be presented in a uniform way to prospective financiers. Financiers also onboard using our UI, including giving us information about their investment preferences (e.g. investment amount, regional preferences, project-type preferences etc).

Today, financiers are presented with every project seeking finance on the platform and have to browse through them to figure out which are relevant to them. Using the preference data we already collect, we should be able to eliminate some of this effort and present financiers with recommended projects which match their needs.

## Tasks

1. Implement an API which returns projects that match an investors preference.
2. Display matching investments in an application, sorted by their matching score.
3. Display yield on debt investments.
 
## Task 1: Matching Project API

The endpoint `/matching_projects/<investor_id>` should return projects, along with their matching score, which looks like this:

```json
 "matching_score": {
    "sustainable_development_goals": 67,
    "investment_size": 100, 
    "total": 84,
}
```

The rules for `sustainable_development_goals` are as follows:
- The score is in the range 0 - 100.
- The score should represent the percentage of investor preference sustainable development goals (SDGs) that the project covers.

The rules for `investment_size` are as follows:
- The score is in the range 0 - 100.
- A positive score indicates the percentage of their desired investment that the investor is able to provide.

The rules for total score are as follows:
- 1/2 of the score should come from the SDG score.
- 1/2 of the score should come from the investment score.

A project is only a match if it has non-zero SGD and non-zero investment size score.

To get started:
- The data for investors and projects is in `backend/data`.
- A placeholder API has been implemented with Flask in `backend/app.py`.

### Task 2: Display the investments in the app

You should now display the matching projects, sorted by score, in the client application.

A basic NextJS application has been created in `frontend/app`, and a barebones React page component exists at `frontend/app/app/page.tsx`.

If an investor rejects an investment, it should stop appearing in the UI. This can be persisted locally for now.

### Task 3: Display yield on debt investments

You should now update the application to show potential yield for debt-financing investments.
