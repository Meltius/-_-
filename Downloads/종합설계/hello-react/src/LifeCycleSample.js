render() {
    console.log(‘render’);


<span class="co46">const</span> <span class="co32">style</span> <span class="co35">=</span><span class="co33"> {</span>


      color: this.props.color
    };



<span class="co46">return</span><span class="co33"> (</span>


      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }