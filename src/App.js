import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styled from "styled-components";
import SingleAnimation from "./pages/single-animations/single-animations";
import MultipleAnimations from "./pages/multiple-animations/multiple-animaitons";
import TimelineAnimations from "./pages/timeline-animations/timeline-animations";
import MountUnmountAnimations from "./pages/mount-unmount/mount-unmount-animations";
import SVGAnimations from "./pages/svg-animations/svg-animations";
import TextAnimations from "./pages/text-animations/text-animations";
import { MenuComponent } from "./components/menu-component";
import { TransitionGroup, Transition } from "react-transition-group";
import { animatePageIn, animatePageOut } from "./animations/route-transtion";
import {
  PageTitleSpan1,
  PageTitleContainer,
  AppWrapper,
  MenuWrapper
} from "./styled-components/styled-components";

let PageWrapper = Styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  > div{
    width: 100%;
  }
`
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let animationDuration = 200;
    return (
      <Router>
        <AppWrapper className="app-wrapper">
          <MenuWrapper className="menu-wrapper">
            <MenuComponent />
          </MenuWrapper>
          <PageWrapper className="page-wrapper">
            <Route
              render={props => {
                return (
                  <TransitionGroup>
                    <Transition
                      key={props.location.pathname}
                      timeout={animationDuration}
                      onEnter={animatePageIn}
                      onExit={animatePageOut}
                      mountOnEnter={true}
                      unmountOnExit={true}
                    >
                      <Switch location={props.location}>
                        <Route exact path="/" component={SingleAnimation} />
                        <Route exact path="/single-animations" component={SingleAnimation} />
                        <Route
                          path="/multiple-animations"
                          component={MultipleAnimations}
                        />
                        <Route
                          path="/timeline-animations"
                          component={TimelineAnimations} />
                        <Route
                          path="/svg-animations"
                          component={SVGAnimations} />
                        <Route
                          path="/text-animations"
                          component={TextAnimations} />
                        <Route
                          path="/mount-unmount-animations"
                          component={MountUnmountAnimations} />
                      </Switch>
                    </Transition>
                  </TransitionGroup>
                );
              }}
            />
          </PageWrapper>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
