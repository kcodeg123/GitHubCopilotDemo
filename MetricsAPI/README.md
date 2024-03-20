[Reference1](https://docs.github.com/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28)
[Reference2](https://cli.github.com/manual/gh_api)

# GitHub CLI

GitHub CLI brings GitHub to your terminal. Free and open source.

Follow the steps in the [Quick Start](https://docs.github.com/en/github-cli/github-cli/quickstart) to install GitHub CLI.

Here's a [Quick Start for the GitHub Copilot CLI](https://github.com/github/gh-copilot) in case you want to use the below commands via the CLI:

         config      Configure options
         explain     Explain a command
         suggest     Suggest a command

However, to get metrics, we will use simply the GitHub CLI.

# Checks

         gh auth status
         gh auth login

To get information regarding the GitHub Copilot usage, you need the "copilot" scope. To request it, run:

         gh auth refresh -h github.com -s copilot

# Get Copilot seat information and settings for an organization

[Details](https://docs.github.com/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28#list-all-copilot-seat-assignments-for-an-organization)

    gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /orgs/msft-teamawesome/copilot/billing

> Note: **msft-teamawesome** must be replaced by your organization name

# List all Copilot seat assignments for an organization

To get the `last_activity_at` of a user, here's the code:

    gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /orgs/msft-teamawesome/copilot/billing/seats

> Note: **msft-teamawesome** must be replaced by your organization name
