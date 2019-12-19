export const styles = {
  Breadcrumb: {
    fontSize: 3,
    ol: {
      paddingLeft: 0
    }
  },
  BreadcrumbSeparator: {
    display: 'inline-block',
    color: 'grays.700',
    paddingX: 2
  },
  BreadcrumbItem: {
    display: 'inline-block',
    '&[aria-current]': {
      color: 'text.body'
    }
  }
}
