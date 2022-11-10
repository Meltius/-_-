import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';


const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;



background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }



${props =>
    props.fullWidth &&
    css</span>
<span class="co33">      </span><span class="cd2 co33">padding-top</span><span class="cd2 co34">:</span><span class="co33"> </span><span class="cd2 co32">0.75rem</span><span class="co33">;</span>
<span class="co33">      </span><span class="cd2 co33">padding-bottom</span><span class="cd2 co34">:</span><span class="co33"> </span><span class="cd2 co32">0.75rem</span><span class="co33">;</span>
<span class="co33">      </span><span class="cd2 co33">width</span><span class="cd2 co34">:</span><span class="co33"> </span><span class="cd2 co32">100%</span><span class="co33">;</span>
<span class="co33">      </span><span class="cd2 co33">font-size</span><span class="cd2 co34">:</span><span class="co33"> </span><span class="cd2 co32">1.125rem</span><span class="co33">;</span>
<span class="co33">    </span><span class="cd2 co31">}



${props =>
    props.cyan &&
    css</span>
<span class="co33">      </span><span class="cd2 co33">background</span><span class="cd2 co34">:</span><span class="co49"> ${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">cyan</span><span class="cd2 co33">[</span><span class="cd2 co32">5</span><span class="cd2 co33">]</span><span class="co49">};</span>
<span class="co33">      </span><span class="cd2 co34">&amp;</span><span class="cd2 co32">:hover</span><span class="co49"> {</span>
<span class="co33">        </span><span class="cd2 co33">background:</span><span class="co49"> ${</span><span class="cd2 co34">palette</span><span class="cd2 co33">.</span><span class="cd2 co34">cyan</span><span class="cd2 co33">[</span><span class="cd2 co32">4</span><span class="cd2 co33">]</span><span class="co49">};</span>
<span class="co49">      }</span>
<span class="co33">    </span><span class="cd2 co31">}
`;



const Button = props => <StyledButton {...props} />;



export default Button;