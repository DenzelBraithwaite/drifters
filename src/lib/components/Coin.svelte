<script lang="ts">
    import Game from './Game.svelte';
  
  </script>
  
  <main>
    <!-- Dummy coin -->
    <div class="dummy-coin">
        <!-- coin -->
        <div class="coin">
          <p>B</p>
        </div>
    </div>

  </main>
  
<style lang="scss">
.coin{
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    font-size: 2.9rem;
    text-align: center;
    text-shadow: 0 1px 1px #00000077;
    color: #fbc210;
    font-weight: bold;
    background-color: #ecb302;
    border: 1px solid #00000022;

    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        margin-left: 5px;
    }
}

.dummy-coin {
    position: relative;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    background-color: #fbc210;
    outline: 0.5px solid #00000070;
    border-bottom: 2px solid #a37d0096;
    border-left: 2px solid #a37d0096;
    margin: 0.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
  