# SASjs Basic UI Components for Angular

UI Depends on Clarity Design
Package includes:

#### Header 

- Logo
- Navigation links (configurable)
- User dropdown (with configurable items and custom on click callbacks)

#### Login modal

#### SAS Logs modal

---

## Components

### Login modal (login-modal.component)

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| loginLoading | boolean | False | Wheather login request is still running, it's sent from parent component |

| Output | Type | Description |
|--------|------|-------------|
| loginButtonClicked | EventEmitter<{username: string, password: string }> |  Wheather login request is still running, it's sent from parent component |

### Header (sasjs-header.component)

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| logo | string | SASjsLogo | Logo in navbar |
| username | string | '' | username | Username in user dropdown parent provides it  |
| sasjsConfig | Adapter.SASjsConfig | undefined | Config object from @SASjs/adapter |
| navLinks | NavLink[] | [] | Navigation links in navbar |
| userDropdown | UserDropdownItem[] | [] | Items in user dropdown |

| Output | Type | Description |
|--------|------|-------------|
| debugChanged | EventEmitter<boolean> | Fires when user toggles the `debug` switch in user dropdown |

### Logs (sasjs-logs.component)
  
| Input | Type | Default | Description |
|-------|------|---------|-------------|
| show | boolean | false | Whether to show the login modal |
| sasjsRequests | SASjsRequestExtended[] | [] | Requests captured from the @SASjs/adapter, passed from parent component |
| sasjsConfig | Adapter.SASjsConfig | undefined | Config object from @SASjs/adapter |
  
| Output | Type | Description |
|--------|------|-------------|
| showChange | EventEmitter() | Fired when `show` change. Enables the two-way binding [(show)]="variable" |
| onDownloadLog | EventEmitter<string> | Fired when donwload button clicked on log tab |
| onDownloadSourceCode |EventEmitter<string> | Fired when donwload button clicked on source code tab |
| onDownloadGeneratedCode | EventEmitter<string> | Fired when donwload button clicked on generated code tab |
  
## Types

```
export interface NavLink {
  routerLink: string
  label: string
}
```
  
```
export interface UserDropdownItem {
  label: string
  clickCallback: () => any
}
```
  
```
export interface SASjsRequestExtended extends SASjsRequest {
  parsedTimestamp?: string
  logErrors?: string[]
  logWarnings?: string[]
  selectedTable?: string
}
```
