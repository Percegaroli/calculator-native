// import original module declarations
import 'styled-components';
import { Theme } from './interface'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme
}
