/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import React from 'react';
import classNames from 'classnames';
import CloseIcon from '../../../components/icons-components/CloseIcon';
import ChartLegendIcon from '../../../components/icons-components/ChartLegendIcon';

type Props = {
  className?: string,
  metric: string,
  name: string,
  style: string,
  removeMetric?: string => void
};

export default class GraphsLegendItem extends React.PureComponent {
  props: Props;

  handleClick = (e: Event) => {
    e.preventDefault();
    this.props.removeMetric(this.props.metric);
  };

  render() {
    const isActionable = this.props.removeMetric != null;
    const legendClass = classNames(
      {
        'project-activity-graph-legend-actionable': isActionable
      },
      this.props.className
    );

    return (
      <span className={legendClass}>
        <ChartLegendIcon
          className={classNames(
            'spacer-right line-chart-legend',
            'line-chart-legend-' + this.props.style
          )}
        />
        {this.props.name}
        {isActionable &&
          <a className="spacer-left button-clean text-text-top" href="#" onClick={this.handleClick}>
            <CloseIcon className="text-danger" />
          </a>}
      </span>
    );
  }
}
