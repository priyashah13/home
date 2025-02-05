import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Navigation: QuartzComponent = ({}: QuartzComponentProps) => {
    return (
      <div class="navigation">
        <a href="/notes" class="nav-link">Notes</a>
        <a href="/projects" class="nav-link">Projects</a>
        <a href="/speaking" class="nav-link">Speaking</a>
      </div>
    )
}

Navigation.css = `
.navigation {
  margin: 0;
  min-height: 100%;
  padding-top: 0.8rem;
  display: flex;
  flex-direction: row;
  
  a.nav-link {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    text-decoration: underline;
    padding-bottom: 0rem;
  }
}
`

export default (() => Navigation) satisfies QuartzComponentConstructor