/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UnpluggedIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { connect } from 'react-redux';
import ConnectionError from 'src/components/ConnectionError';
import TravelingSalesmanProblem from '../components/TravelingSalesmanProblem';
import { IAppState } from '../store/configStore';
import { WebSocketConnectionStatus } from '../store/websocket/types';
import './App.css';

export interface IAppProps {
  connectionStatus: WebSocketConnectionStatus;
}

const mapStateToProps = ({ connectionStatus }: IAppState): Partial<IAppProps> => ({
  connectionStatus,
});

class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    const { connectionStatus } = this.props;
    return (
      <div>
        {connectionStatus === WebSocketConnectionStatus.ERROR && (
          <ConnectionError
            title="Oops... Connection error!"
            message="Please check your network connection."
            icon={<UnpluggedIcon />}
            help="When connection is available the application will be functional again."
          />
        )}
        <TravelingSalesmanProblem />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
