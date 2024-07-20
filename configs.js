const configs = {
  obs: {
    host: 'ws://127.0.0.1:4455',
  },
  i18n: {
    PARTICIPANT_OPTIONS: {
      ALL: 'Todos (participan si hablan por el chat)',
      SUBS: 'Solo subscriptores (participan si hablan por el chat)',
      EVENT_SUBS: 'Aquellos que se subscriben o regalen una subcripción',
    },
    JUST_A_DROP: 'Solo una vez cuando yo quiera',
    JUST_AFTER_TIME: 'Solo una vez luego de X tiempo',
    DROP_LOOP: 'Dropear claves cada cierto tiempo',
    COMUNISTA: 'Comunista: todos tienen la misma chance',
    CAPITALISTA: 'Capitalista: Los subs tienen x2 chance',
    OLIGARQUIA: 'Oligarquia: una chance mas por cada mes subscripto',
    NUNCA_BORRAR: 'Una vez que hacen un comentario, participarán toda la sesión',
    BORRAR_TIEMPO: 'Limiar la lista de participantes cada X drops',
    BORRAR_POR_CADA_DROP: 'Limpiar la lista cada vez que se dropea una clave',
    show: {
      CANTIDAD_PARTICIPANTES: 'Cantidad de participantes',
      PROBABILIDAD: 'Probabilidad con la que ganó',
      NOMBRE_GANADOR: 'Nombre del ganador',
      KEYS_RESTANTES: 'Cantidad de drops regalados/totales',
      MESES_SYBSCRIPTO: 'Meses subscripto',
    },
  },
};

export default configs;
