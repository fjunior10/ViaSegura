import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🚧</Text>

      <Text style={styles.titulo}>ViaSegura</Text>

      <Text style={styles.subtitulo}>
        Ajude a tornar nossas vias mais seguras.
      </Text>

      <Text style={styles.descricao}>
        Registre buracos e outros problemas nas vias públicas,
        ajude outros motoristas e contribua para melhorias na sua cidade.
      </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>📍 REPORTAR PROBLEMA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario}>
        <Text style={styles.textoBotaoSecundario}>
          🗺️ VER OCORRÊNCIAS
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  icone: {
    fontSize: 70,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
    marginBottom: 20,
  },

  descricao: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 35,
  },

  botao: {
    backgroundColor: '#2563EB',
    width: '100%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoSecundario: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },

  textoBotaoSecundario: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold',
  },
});