import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const ComingSoons: React.FC = () => {
  library.add(faUser)
  library.add(faPlus)
  library.add(faMinus)
  return (
    <VerticalTimeline>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title"> Many Foundation</h3>
        <p>
          Implementing the soul goal of the project with future planning for a full
          digital marketplace controlled and run by the community.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">MANY full supply airdrop </h3>
        <p>
          In order to ensure this project is owned by the community, so we airdrop the
          full supply to the community for free, with 1M USD in trading volume for the
          first 3 days.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">MOAR Defi </h3>
        <p>
          A new token as a Defi “Decentralized finance” based token to be farmed using
          the $MANY coins stacking LP on uniswap creation of a complete ecosystem for
          future NFT minting using the MOAR coin.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">MANY MOAR pool</h3>
        <p>
          Providing liquidity for the project by paring MANY to MAOR  + MANY to ETH
          to stack and farm the coins for future using in mining a dynamic multi-use NFT.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">Government Implementation</h3>
        <p>
          MANY token holders will grant the ability to make core changes into the project by
          creating proposals, other holders will be able to vote to approved or deny it, then
          the developers will implement it.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">NFT Platform</h3>
        <p>
          Full dynamic NT with a digital market place implementation with multi-layers
          futures and uses based on a custom made erc1155 that will be minted using $MOAR token.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">Ecosystem</h3>

        <p>
          The full release of an ecosystem with dynamic rules that can be modified and changed by
          the community to ensure the survival of the project and funding of the MANY.global team.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      >
        <h3 className="vertical-timeline-element-title">The Vault</h3>

        <p>
          Complex LP and a
          {' '}
          <span style={{ fontSize: '15px', marginRight: '0.5rem', fontWeight: 'bold' }}>SAFTP</span>
          {' '}
          fund
          <span style={{ fontSize: '20px', marginRight: '0.5rem' }}>&quot;Secure Asset Fund for the project&quot;</span>
          using the ecosystem plan to create a back-up fund to hold off any
          large price drop or a bug in the contract code
          to secure the token value or creation of a price floor, in total
          the vault will act as a deeper liquidity provider and insurance for
          the project overall value.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FontAwesomeIcon icon="minus" size="2x" />}
      />
    </VerticalTimeline>

  )
}

export default ComingSoons