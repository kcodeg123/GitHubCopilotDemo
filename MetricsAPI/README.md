[Reference](https://docs.github.com/en/rest/copilot/copilot-user-management?apiVersion=2022-11-28)

         gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /orgs/msft-teamawesome/copilot/billing

To get the last activity of a user, here's the code:

        gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /orgs/msft-teamawesome/copilot/billing/seats


