export function activeSidebar() {
  const navLinks = document.querySelectorAll('#sidebar .nav-item');
  const { href } = location;

  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    const navLinkHref = navLink.querySelector('a').href;

    if (navLinkHref === href) {
      navLink.classList.add('active');
    }
  }
}
