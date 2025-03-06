type ReqHeaders = {
  Authorization?: string
}

const reqHeaders: ReqHeaders = {}

export async function getGithubProfile(yourGithubUsername: string) {
  if (!yourGithubUsername) {
    return false
  }

  try {
    const github_profile_url = `https://api.github.com/users/${yourGithubUsername}`

    const res = await fetch(github_profile_url, {
      method: "GET",
      headers: reqHeaders,
      next: {
        revalidate: 3600,
      },
      // Add cache control to prevent issues with response consumption
      cache: "force-cache",
    })

    // Check for 404 status before consuming the response
    if (res.status === 404) {
      return "not-found"
    }

    // Only consume the response once
    const githubProfile = await res.json()

    // Handle the "Not Found" message from GitHub API
    if (githubProfile.message === "Not Found") {
      return "not-found"
    }

    // Set name to login if name is not available
    if (!githubProfile.name && githubProfile.login) {
      githubProfile.name = githubProfile.login
    }

    return githubProfile
  } catch (error) {
    console.error("Error fetching GitHub profile:", error)
    // Return a value that indicates an error occurred
    return null
  }
}
