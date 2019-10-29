export let handleLink = (link: { href?: string, hash?: string }) => {
    const { href, hash } = link
    if (href) {
        window.open(href, "_blank")
    } else if (hash) {
        window.location.hash = "noanchor"
        window.location.hash = hash
    }
}